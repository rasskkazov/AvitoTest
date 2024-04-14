import { Group, Header, Text } from "@vkontakte/vkui";
import React from "react";
import { PaginatedList } from "../../features";
import { ReviewPaginated } from "../../pages/movie/types";
import ShowMoreText from "react-show-more-text";
type ReviewListProps = {
  reviewData: ReviewPaginated;
  updateReviewData: (page: number) => void;
};
export const ReviewList = (props: ReviewListProps) => {
  const actorItems = props.reviewData.docs.map((item) => (
    <div
      className="review"
      key={item.review}
      style={{ whiteSpace: "pre-wrap" }}
    >
      <Header>{item.author}</Header>
      <ShowMoreText
        lines={3}
        more="Show more"
        less="Show less"
        className="content-css"
        anchorClass="show-more-less-clickable"
        // onClick={this.executeOnClick}
        expanded={false}
        width={500}
      >
        <Text>{item.review}</Text>
      </ShowMoreText>
    </div>
  ));
  return (
    <Group header={<Header mode="secondary">Отзывы</Header>}>
      <PaginatedList
        page={props.reviewData.page}
        pages={props.reviewData.pages}
        onChange={props.updateReviewData}
        elements={actorItems ?? []}
      />
    </Group>
  );
};
