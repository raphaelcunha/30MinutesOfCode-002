import { useQuery } from "react-query";
import Skeleton from "~/components/Skeleton";
import ContentPost from "containers/ContentPost";
import { TContent } from "models/content";
import { getContents } from "services/content";
import SidebarTitle from "./components/SidebarTitle";
import { StyledSidebar } from "./styles";

export interface IContentPostDetailSidebar {
  contents?: TContent[];
  queryKey?: string;
}

const ContentPostDetailSidebar = () => {
  const queryKey = "getContents";
  const { data: contents } = useQuery(queryKey, getContents);

  if (!contents) {
    return (
      <StyledSidebar>
        <SidebarTitle />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={428}
          sx={{ mb: 4 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={428}
          sx={{ mb: 4 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={428}
          sx={{ mb: 4 }}
        />
      </StyledSidebar>
    );
  }

  return (
    <StyledSidebar>
      <SidebarTitle />
      {contents.slice(0, 2).map((content) => (
        <ContentPost key={content.id} content={content} queryKey={queryKey} />
      ))}
    </StyledSidebar>
  );
};

export default ContentPostDetailSidebar;
