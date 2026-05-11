export enum ApplicationStatus {
  PENDING = 'Pending',
  REVIEWED = 'Reviewed',
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
}

export interface Application {
  id?: string;
  childFirstName: string;
  childLastName: string;
  childDateOfBirth: string;
  childGender: 'Male' | 'Female';
  applyingForClass: string;
  parentName: string;
  parentEmail: string;
  parentPhoneNumber: string;
  residentialAddress: string;
  birthCertificateUrl?: string;
  passportPhotoUrl?: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  thumbnailUrl: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id?: string;
  title?: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}
