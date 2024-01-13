import React from "react";
import PropTypes from "prop-types";

import { Grid } from "semantic-ui-react";

import "./Notes.scss";

// TODO - GET RID OF semantic-ui-react - WHY USE A LIBRARY AND CUSTOM STYLES?
const Notes = ({ data: { subject, note, updatedAt, icon } }) => (
  <Grid
    columns="equal"
    className={subject === "API error" ? "error note" : "note"}
  >
    <Grid.Column mobile={3} tablet={2} computer={1} className="icon">
      <i
        aria-label={icon && icon.label ? icon.label : "note icon"}
        className={`${
          (icon && icon.image) || "sticky note"
        } big circular icon error`}
      />
    </Grid.Column>
    <Grid.Column mobile={9} tablet={12} computer={12} className="content">
      <h3>{subject}</h3>
      <p>{note}</p>
    </Grid.Column>
    {updatedAt && (
      <Grid.Column mobile={4} tablet={2} computer={2} className="date">
        <p>{updatedAt}</p>
      </Grid.Column>
    )}
  </Grid>
);

Notes.propTypes = {
  data: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    note: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.shape({
      image: PropTypes.string,
      label: PropTypes.string,
    }),
  }),
};

export default Notes;
