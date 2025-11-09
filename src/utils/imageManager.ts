const imageList = import.meta.glob('../assets/*.{jpg,jpeg,png}', {
  query: '?url',
  eager: true,
  import: 'default',
});

export const imagePaths = new Map<string, string[]>();

export const loadImagePaths = () => {
  for (const path in imageList) {
    const fileName = path.split('/').pop()?.split('_')[0] as string;
    const staticPath = imageList[path] as string;
    if (imagePaths.has(fileName)) {
      imagePaths.set(fileName, [...imagePaths.get(fileName)!, staticPath]);
    } else {
      imagePaths.set(fileName, [staticPath]);
    }
  }
};

loadImagePaths();
