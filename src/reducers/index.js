import { useHistory, RouterProvider, useRouter } from './RouterReducer'
import { useTheme, ThemeConsumer, ThemeProvider } from './ThemeReducer'
import { UserProvider, UserConsumer, useUser } from './UserReducer'
import { SocketProvider, SocketConsumer } from './SocketReducer'
export {
    useHistory,
    RouterProvider,
    useRouter,
    useTheme,
    ThemeConsumer,
    ThemeProvider,
    UserProvider,
    UserConsumer,
    useUser,
    SocketConsumer,
    SocketProvider,
}


//http://localhost:8080/auth/realms/ChatApp/protocol/openid-connect/auth?client_id=frontend&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%3Ferror%3Dinvalid_request%26error_description%3DMissing%2Bparameter%253A%2Bresponse_type&state=62caa1f2-474b-4cda-a6de-7249978496a7&response_mode=fragment&response_type=code&scope=openid&nonce=39359807-bfa2-44d4-8207-4af27603d375