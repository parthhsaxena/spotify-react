const getRefreshToken = async () => {
  // refresh token that has been previously stored
  const refreshToken = localStorage.getItem("refresh_token");
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: "f367fd0ef2b042d8af8095db950cabcc",
    }),
  };
  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.accessToken);
  localStorage.setItem("refresh_token", response.refreshToken);
};
console.log(refreshToken);
