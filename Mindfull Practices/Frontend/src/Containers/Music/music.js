import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "./music.scss";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const CLIENT_ID = "f91bfec259264bc3a916edb7c04f2c12";
const CLIENT_SECRET = "e1f05cd40e0245eca715090a9e3b4222";

const mapStateToProps = (state) => {
  return {
    isLoading: state?.Loader?.showLoader,
  };
};

function Music(props) {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    //API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //Search
  async function search() {
    console.log("Search for " + searchInput);
    // Get request using search to get the Artrist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Artist ID is" + artistID);
    // Get request with Artists ID grab all the albums from that artists

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });

    //Display those albums to the user
  }

  function handleAlbumClick(url) {
    window.open(url, "_blank");
  }

  console.log(albums);
  return (
    <div className="Music">
      <Container>
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Search For Artist"
            type="input"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            className="search-button"
            onClick={(event) => {
              search();
            }}
          >
            Search
          </Button>
        </div>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            console.log(album);
            return (
              <Card
                key={i}
                className="card"
                onClick={() => handleAlbumClick(album.external_urls.spotify)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {album.artists[0].name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps)(Music);
