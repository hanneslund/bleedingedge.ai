import styled from "styled-components";
import Avatar from "./Avatar";
import Stacked from "./Stacked";

export default function Participants({ article }) {
  if (article.comments.length === 0) {
    return null;
  }

  const totalPartipants = article.comments?.length || 0;
  const particpantsToShow = article.comments?.slice(0, 4) || [];
  const overflowParticpants = totalPartipants - particpantsToShow?.length;

  return (
    <>
      {overflowParticpants ? <Extra>+{overflowParticpants}</Extra> : null}
      <Stacked
        size={18}
        direction="right"
        elements={particpantsToShow.map((comment) => (
          <Avatar
            src={comment.author.image}
            size={18}
            outline={false}
            greyScale
          />
        ))}
      />
    </>
  );
}

const Extra = styled.span`
  font-size: 10px;
  margin-right: 5px;
  color: ${(p) => p.theme.colors.light_grey};
`;
