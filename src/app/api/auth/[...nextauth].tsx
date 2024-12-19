import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

const handler = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("LinkedIn Login - Account Data:", account);
      console.log("LinkedIn Login - Profile Data:", profile);
      console.log("LinkedIn Login - User Data:", user);
      return true; // Allow sign-in
    },
  },
//   secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
