const ImageKit = require('@imagekit/nodejs');

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_SECRET_KEY
});

async function uploadIcon(file) {
  const result = await client.files.upload({
    file,
    fileName: 'icons_',
    folder: 'Eid_Project/icons'
  });

  return result
}

module.exports = { uploadIcon }