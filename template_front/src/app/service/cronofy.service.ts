import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CronofyService {
  private clientId = 'dE84efZsaNORTSODJWzZcgqcTg4PrTmy';
  private clientSecret = 'CRN_3JQRAJsDEcHQqoyR8gAp5oNnoNfeArq3D57DYB';
  private redirectUri = 'http://localhost:4200/callback';

  getAuthUrl() {
    return `https://app.cronofy.com/oauth/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=read_events&state=xyz`;
  }

  async exchangeCodeForToken(code: string) {
    const url = 'https://api.cronofy.com/oauth/token';
    const body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: this.redirectUri,
    };
    const response = await axios.post(url, body);
    return response.data;
  }

  async getEvents(accessToken: string): Promise<any> {
    const url = 'https://api.cronofy.com/v1/events';
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        // Token might be expired, try to refresh
        const newToken = await this.refreshToken(accessToken);
        if (newToken) {
          return this.getEvents(newToken);
        }
      }
      throw error;
    }
  }

  async refreshToken(refreshToken: string) {
    const url = 'https://api.cronofy.com/oauth/token';
    const body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    };
    try {
      const response = await axios.post(url, body);
      localStorage.setItem('cronofy_access_token', response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null;
    }
  }
}