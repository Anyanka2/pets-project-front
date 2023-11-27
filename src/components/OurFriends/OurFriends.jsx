import Box from "@mui/material/Box";
import {
  StyledList,
  StyledItem,
  StyledName,
  StyledImgThumb,
  StyledImage,
  StyledContacts,
  StyledContactsLink,
} from "./OurFriends.styled";

export const OurFriends = ({ ourFriends }) => {
  const formatPhone = (number) => {
    if (number === "email only") {
      return "N/A";
    }
    return number.split(" ").join("");
  };

  return (
    <StyledList>
      {ourFriends.length > 0 &&
        ourFriends.map((friend) => (
          <StyledItem key={friend.id}>
            <StyledName href={friend.link} target="_blank">
              {friend.name}
            </StyledName>
            <Box
              sx={{
                display: "flex",
                marginTop: "16px",
                justifyContent: "space-between",
              }}
            >
              <StyledImgThumb>
                <StyledImage src={friend.image} alt={friend.name} />
              </StyledImgThumb>
              <Box
                sx={{
                  width: "50%",
                  textAlign: "left",
                }}
              >
                <StyledContacts>
                  Time
                  <br />
                  {friend.time}
                </StyledContacts>
                <StyledContacts>
                  Address
                  <br />
                  {friend.address}
                </StyledContacts>
                <StyledContacts>
                  Email
                  <br />
                  <StyledContactsLink href={`mailto:${friend.email}`}>
                    {" "}
                    {friend.email}
                  </StyledContactsLink>
                </StyledContacts>
                <StyledContacts>
                  Phone
                  <br />
                  <StyledContactsLink href={`tel:${formatPhone(friend.phone)}`}>
                    {" "}
                    {friend.phone}
                  </StyledContactsLink>
                </StyledContacts>
              </Box>
            </Box>
          </StyledItem>
        ))}
    </StyledList>
  );
};

export default OurFriends;
