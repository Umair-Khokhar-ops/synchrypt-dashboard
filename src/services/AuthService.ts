// simple promise-based fake login returning a dummy JWT
const AuthService = {
  login: (username: string, password: string): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // you could check username/password here
        resolve({ token: "dummy-jwt-token" });
      }, 500);
    });
  },
};

export default AuthService;
