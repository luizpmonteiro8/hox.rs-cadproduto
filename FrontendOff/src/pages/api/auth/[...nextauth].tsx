import NextAuth from 'next-auth';
import { Credential, User } from 'app/models/user/index';
import CredentialsProvider from 'next-auth/providers/credentials';
import _logger from 'next-auth/lib/logger';
import axios from 'axios';

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
    maxAge: 2592000,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Username', type: 'text ', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Credential) {
        if (!credentials.email && !credentials.password) {
          throw new Error('Email e senha requerido.');
        }
        const credential: User = { mail: credentials.email, password: credentials.password };
        const url = `${process.env.BASEURL}/login`;

        return await fetch(url, {
          method: 'POST',
          headers: { 'Content-type': 'application/json;charset=UTF-8' },
          body: JSON.stringify(credential),
        })
          .then((response) => response.json())
          .then((res) => {
            const authorization = { id: res.accessToken };

            if (authorization) {
              return authorization;
            } else {
              return null;
            }
          })
          .catch((error) => {
            throw new Error('Email ou senha incorreta!');
          });
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (token.sub) {
        return token;
      } else {
        return null;
      }
    },
    session: async ({ session, token }) => {
      if (!token.sub) {
        throw new Error('Email ou senha inválido!');
      }
      session.accessToken = token.sub;
      return { ...session };
    },
  },
});
