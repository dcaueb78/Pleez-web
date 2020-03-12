import Multer from 'multer';

const multerConfig = {
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
};

export default multerConfig;
