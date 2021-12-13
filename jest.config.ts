
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    testMatch: [
        '<rootDir>/spec/*.test.ts',
        '<rootDir>/spec/*.test.tsx',
    ],
};
export default config;