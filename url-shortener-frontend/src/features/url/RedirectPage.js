import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/v1/urls/redirect/${shortCode}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const originalUrl = response.data;
        window.location.replace(originalUrl);
      } catch (error) {
        console.error("Greška:", error);
        navigate("/not-found");
      }
    };

    fetchOriginalUrl();
  }, [shortCode, navigate]);

  return <p>Preusmeravanje...</p>;
};

export default RedirectPage;
