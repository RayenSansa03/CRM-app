// task.model.ts
export interface Task {
    _id?: string;
    title: string;
    status: 'to do' | 'in progress' | 'done';
    project: string;
    isImportant?: boolean; // Nouvelle propriété

  }
  