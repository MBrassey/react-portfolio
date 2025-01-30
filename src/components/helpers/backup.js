import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../index.css";

const ERC721Info = () => {
  const defaultOwnerAddress = "0x07b4E3A9134Bc88276e6Ff9516620755144CEC79";
  const contractAddress = "0x476edA02BF0C35603fD6E0306cf85381029F90F1";

  const [ownerAddress, setOwnerAddress] = useState(defaultOwnerAddress);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageLoading, setImageLoading] = useState({}); // Track image loading states

  const fetchData = async (owner) => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://erc721.theblueprint.xyz/proxy/${contractAddress}/${owner}`;
      const basicAuth = "Basic " + btoa("admin:password");
      const config = {
        headers: {
          Authorization: basicAuth,
        },
      };

      const response = await axios.get(url, config);
      if (response.status === 200) {
        setNfts(response.data.nfts);
      } else {
        throw new Error("Bad response from server");
      }
    } catch (err) {
      console.error("Error fetching NFT data:", err);
      setError("That is not a valid Ethereum address.");
      setNfts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(ownerAddress);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData(ownerAddress);
    }
  };

  const handleImageLoad = (tokenId) => {
    setImageLoading((prevState) => ({ ...prevState, [tokenId]: false }));
  };

  const handleImageError = (tokenId) => {
    setImageLoading((prevState) => ({ ...prevState, [tokenId]: false }));
  };

  const handleImageStartLoading = (tokenId) => {
    setImageLoading((prevState) => ({ ...prevState, [tokenId]: true }));
  };

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder={`e.g., ${defaultOwnerAddress}`}
          value={ownerAddress}
          onChange={(e) => setOwnerAddress(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-field"
        />
      </div>
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {error && <div className="error-message">Error: {error}</div>}
      {!loading && nfts.length > 0 && (
        <div className="nft-table-wrapper">
<table className="erc721-table">
  <thead>
    <tr>
      <th className="table-header token-id-header">ID</th>
      <th className="table-header token-uri-header">Token URI</th>
      <th className="table-header image-header">Image</th>
    </tr>
  </thead>
  <tbody>
    {nfts.map((nft, index) => (
      <tr key={index} className="table-row">
        <td className="table-cell token-id">{nft.tokenId}</td>
        <td className="table-cell token-uri">
          <a
            href={nft.tokenURI}
            target="_blank"
            rel="noopener noreferrer"
            className="table-link"
          >
            {nft.tokenURI}
          </a>
        </td>
        <td className="table-cell image-cell">
          {imageLoading[nft.tokenId] && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
          <img
            src={nft.image}
            alt={`NFT ${nft.tokenId}`}
            className="nft-image"
            onLoad={() => handleImageLoad(nft.tokenId)}
            onError={() => handleImageError(nft.tokenId)}
            onLoadStart={() => handleImageStartLoading(nft.tokenId)}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      )}
      {!loading && nfts.length === 0 && !error && (
        <div className="no-tokens-message">Address does not hold DAPPU token.</div>
      )}
    </div>
  );
};

export default ERC721Info;