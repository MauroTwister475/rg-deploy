import { create } from 'zustand';
import { UserAuth } from "@/app/@types/Types"
import cookies from 'js-cookie';

interface AuthProps {
  user: UserAuth,
  onSetAuthUser: (user: UserAuth) => void,
}

function getUserFromCookies(): UserAuth {
  const userCookie = cookies!.get('SG.user')
  if (userCookie) {
    const user: UserAuth = JSON.parse(userCookie);
    console.log(user);

    return user;
  } else {
    return {
      user: {
        id: "",
        email: "",
        name: "",
      },
      token: "",
    };
  }
}

export const AuthStore = create<AuthProps>()((set) => ({
  user: {
    user: {
      id: getUserFromCookies()?.user.id,
      email: getUserFromCookies()?.user.email,
      name: getUserFromCookies()?.user.name,
    },
    token: getUserFromCookies()?.token,
  }, // vir da api...
  onSetAuthUser: (user: UserAuth) =>
    set((state) => ({
      user: user,
    }))
}))
