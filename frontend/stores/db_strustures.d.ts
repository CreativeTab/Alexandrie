export interface DB_Document {
  id: string;
  name: string;
  description?: string;
  tags?: string;
  category?: string;
  parent_id?: string | null;
  accessibility: number; // 1 Visible; 2 Draft; 3 Archived;
  content_markdown?: string;
  content_html?: string;
  author_id: string;
  created_timestamp: string;
  updated_timestamp: string;
}
export interface Document extends DB_Document {
  partial?: boolean;
  type: 'document';
}
export interface DB_Category {
  id: string;
  name: string;
  icon?: string;
  order?: number;
  role: number; // 1 Category; 2 Workspace
  workspace_id?: string;
  parent_id?: string;
}
export interface Category extends DB_Category {
  type: 'category';
}

export interface User {
  id: string;
  username: string;
  firstname?: string;
  lastname?: string;
  role: number; // 0: User; 1: Admin;
  avatar?: string;
  password?: string;
  email: string;
  created_timestamp: string;
  updated_timestamp?: string;
}

export interface ConnectionLog {
  id: string;
  user_id: string;
  ip_adress?: string;
  user_agent?: string;
  location?: string;
  type: string;
  timestamp: string; // BIGINT converted to string
}
export interface DB_Ressource {
  id: string;
  filename: string;
  file_size: number;
  file_type: string;
  original_path: string;
  transformed_path: string;
  author_id: string;
  created_timestamp: string;
}
