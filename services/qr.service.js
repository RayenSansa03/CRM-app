const QRCode = require("qrcode");

const generateQRCode = async (url) => {
  try {
    return await QRCode.toDataURL(url);
  } catch (error) {
    throw new Error("Erreur lors de la génération du QR Code");
  }
};

module.exports = { generateQRCode };
