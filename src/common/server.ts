import * as readPkgUp from 'read-pkg-up';

const { packageJson: pkg } = readPkgUp.sync();

export const isProduction = process.env.NODE_ENV === 'production';
export const productionPort = process.env.PORT || 5555;
export const serverPort = isProduction ? productionPort : 5555;
export const serverName = pkg.name;
export const serverVersion = pkg.version;
