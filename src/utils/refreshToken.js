import { useState, useEffect, useCallback } from "react";

export const FEATURED_PLAYLISTS =
  "https://api.spotify.com/v1/browse/featured-playlists?locale=hi_IN&limit=24";
export const TOKEN_URL = "https://accounts.spotify.com/api/token";

export const useAuthToken = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [expiresAt, setExpiresAt] = useState(null);

  const fetchAccessToken = useCallback(async () => {
    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    setAccessToken(data.access_token);

    // Assuming token lasts for 1 hour (3600 seconds)
    setExpiresAt(Date.now() + data.expires_in * 360000);
  }, []);

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (expiresAt && Date.now() > expiresAt - 60000) {
        // Refresh token 1 minute before expiry
        fetchAccessToken();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [fetchAccessToken, expiresAt]);

  return accessToken;
};
