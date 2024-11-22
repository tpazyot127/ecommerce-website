import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { server } from "../../../config/index";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch(`${server}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    });

                    const user = await res.json();
                    if (res.ok && user) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.log(error);
                    throw new Error(error.message);
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.type === "credentials") {
                account.accessToken = user.access_token;
            }

            return true;
        },
        jwt: async ({ token, account }) => {
            if (account && account.type === "credentials") {
                token.accessToken = account.access_token;
            }

            return token;
        },
        session({ session, token, user }) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
};

export default NextAuth(authOptions);
