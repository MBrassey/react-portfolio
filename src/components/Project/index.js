import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
    </section>
  );
}
export default Project;
