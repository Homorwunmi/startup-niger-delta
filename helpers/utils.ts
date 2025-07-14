export const renderFileInfo = (file: string | File | undefined) => {
  if (!file) return 'No file selected';
  if (file instanceof File) return file.name; // Show filename
  return file; // It's already a string
};
