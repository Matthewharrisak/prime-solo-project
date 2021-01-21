import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import get from 'lodash/get';
import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';

import { useFormatDate } from '../../helpers/useFormatDate';

export const EventItem = ({ event, dispatch }) => {
  const history = useHistory();
  const formattedDate = useFormatDate({ date: get(event, 'date', '') });

  const onClick = useCallback(() => {
    history.push('/EventDetails');
    // ! issue with this request
    dispatch({ type: 'GET_DETAILS', payload: event });
  }, [history, dispatch]);

  return (
    <StyledContainer>
      <StyledLabel>{event.title}</StyledLabel>
      <StyledLabel>{formattedDate}</StyledLabel>
      <StyledButton onClick={onClick}>more info!!</StyledButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border: 1px solid black;
  background-color: #FCF6B1;
  box-shadow: 10px 10px grey;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  min-height: 6rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

const StyledLabel = styled(ListItemText)`
  width: 33%;
`

const StyledButton = styled.div`
  padding: 10px 20px;
  border-color: #014041;
  border-width: 1px 1px 3px;
  border-radius: 4px;
  background-color: #f7b32b;
  color: #f8f8f8;
  font-size: 1.1rem;
  outline: 0;
  cursor: pointer;
  width: 2.5rem;
  border-style: solid;
`