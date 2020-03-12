import { format } from 'util';

import gc from '../config/googleCloud';

const bucket = gc.bucket('pleez_images_bucket_1'); // should be your bucket name

export default file =>
  new Promise((resolve, reject) => {
    const { originalname, buffer } = file;

    const blob = bucket.file(originalname.replace(/ /g, '_'));
    const blobStream = blob.createWriteStream({
      resumable: false
    });
    blobStream
      .on('finish', () => {
        const publicUrl = format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
      })
      .on('error', err => {
        console.log(err);
      })
      .end(buffer);
  });
