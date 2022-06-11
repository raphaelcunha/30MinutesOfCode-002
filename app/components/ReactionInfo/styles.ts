import { styled } from "@mui/material/styles";
import Box from "~/components/Box";

export const StyledEmotionContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const StyledEmotion = styled(Box)`
  height: 24px;
  width: 24px;
  border-radius: 100%;
  background-color: #f0f1f9;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
  text-align: center;
  padding-top: 2px;
  border: 1px solid #f1f1f1;
  margin-left: -8px;
`;
