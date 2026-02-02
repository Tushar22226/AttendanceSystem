export type RootStackParamList = {
  // ... other routes
  DocumentUser: {
    documentUrls: { [key: string]: string };
    surveyNumber: string;
    ownerName: string;
    status: string;
  };
  DocumentPreview: {
    documentUrl: string;
    documentName: string;
  };
  DocumentManagement: undefined;
};
