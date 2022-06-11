import Box from "~/components/Box";
import { VimeoIframe } from "./styles";

type TVimeoProps = {
  url: string;
};

const VimeoEmbed = ({ url }: TVimeoProps) => {
  const id = url.split("/")[3];

  return (
    <Box
      position="relative"
      paddingBottom="56.25%"
      height="0"
      overflow="hidden"
      maxWidth="100%"
    >
      <VimeoIframe
        frameBorder="0"
        src={`https://player.vimeo.com/video/${id}`}
      />
    </Box>
  );
};

export default VimeoEmbed;
