export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: ${theme.colors.blueLink};
  width: 248px;
  height: 38px;
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.blueLink};
  background: transparent;
  margin: 0 auto;

  &:hover,
  &:focus {
    background: ${theme.colors.blueGradient};
    color: ${theme.colors.white};
  }
`;