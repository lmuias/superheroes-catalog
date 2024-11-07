const BASIC_URL = `http://localhost:8080/heroes`

export const uploadImage = async (heroId: string, file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(BASIC_URL +`/${heroId}/upload`, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  return data.imageUrl;
};

export   const uploadMainImage = async (heroId: string, file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(BASIC_URL +`/${heroId}/upload/main-image`, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  return data.imageUrl;
};

export const deleteImage = async (heroId: string, imageUrl: string) => {
  try {
    await fetch(BASIC_URL +`/${heroId}/images`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl }),
    });
    console.log('Image deleted successfully');
  } catch (error) {
    console.error('Failed to delete image:', error);
  }
};
