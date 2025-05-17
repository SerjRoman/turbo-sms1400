import { useEffect, useState } from 'react';
import { IUser } from '../types';
import { Result } from '../../../shared/types/result';
import { GET } from '../../../shared/api/get';
import { POST } from '../../../shared/api/post';

type AuthError = {
  message: string;
  code?: number;
  type?: 'EXISTS' | 'NOT_FOUND' | 'UNAUTHORIZED' | 'VALIDATION' | 'SERVER';
};

export function useAuth() {
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState<AuthError | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getMe(token: string): Promise<Result<IUser>> {
        setIsLoading(true);
        setError(null);

        try {
        const result = await GET<IUser>({
            endpoint: 'http://localhost:8000/api/users/me',
            token: token
        });

        if (result.status === 'error') {
            handleBackendError({
                message: result.message ?? 'Unknown error',
                code: result.code
            });
            return result;
        }

        setUser(result.data);
        return result;
        } catch (error) {
        const networkError: AuthError = {
            message: 'Network error',
            type: 'SERVER'
        };
        setError(networkError);
        return {
            status: 'error',
            message: networkError.message,
            code: 500
        };
        } finally {
        setIsLoading(false);
        }
    }

    async function login(email: string, password: string): Promise<Result<string>> {
        setIsLoading(true);
        setError(null);

        try {
        const result = await POST<string>({
            endpoint: 'http://localhost:8000/api/users/login',
            body: { email, password }
        });

        if (result.status === 'error') {
            handleBackendError({
                message: result.message ?? 'Unknown error',
                code: result.code
            });
            return result;
        }

        await getMe(result.data);
        return result;
        } catch (error) {
        const networkError: AuthError = {
            message: 'Network error',
            type: 'SERVER'
        };
        setError(networkError);
        return {
            status: 'error',
            message: networkError.message,
            code: 500
        };
        } finally {
        setIsLoading(false);
        }
    }

    async function register(
        email: string,
        username: string,
        image: string,
        password: string
    ): Promise<Result<string>> {
        setIsLoading(true);
        setError(null);

        try {
        const result = await POST<string>({
            endpoint: 'http://localhost:8000/api/users/register',
            body: { email, username, image, password }
        });

        if (result.status === 'error') {
            handleBackendError({
                message: result.message ?? 'Unknown error',
                code: result.code
            });
            return result;
        }

        await getMe(result.data);
        return result;
        } catch (error) {
        const networkError: AuthError = {
            message: 'Network error',
            type: 'SERVER'
        };
        setError(networkError);
        return {
            status: 'error',
            message: networkError.message,
            code: 500
        };
        } finally {
        setIsLoading(false);
        }
    }

    function handleBackendError(result: { message: string; code?: number }) {
        let errorType: AuthError['type'];
        
        switch (result.code) {
        case 409:
            errorType = 'EXISTS';
            break;
        case 404:
            errorType = 'NOT_FOUND';
            break;
        case 401:
            errorType = 'UNAUTHORIZED';
            break;
        case 422:
            errorType = 'VALIDATION';
            break;
        default:
            errorType = 'SERVER';
        }

        const authError: AuthError = {
        message: result.message,
        code: result.code,
        type: errorType
        };

        setError(authError);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        getMe(token);
        }
    }, []);

    return { 
        login, 
        register, 
        getMe, 
    };
}