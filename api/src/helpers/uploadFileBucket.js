import { format } from 'util';
import Hashes from 'jshashes';

import storage from '../config/Storage';

const bucket = storage.bucket('pleez_images_bucket_1');

export default file =>
  new Promise(resolve => {
    const { originalname, buffer } = file;

    const hash = new Hashes.SHA1().b64(originalname);
    const blob = bucket.file(
      `${hash}-${originalname.length}-${Math.floor(Math.random() * 1000) + 1}`
    );
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
        throw new Error(err);
      })
      .end(buffer);
  });
