import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';

import iconDefault from '../../assets/default.png';
import typeIcons from '../../utils/typeIcons';


function TaskCard( {type, title, when, done}) {
  const data = useMemo(()=> format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(()=> format(new Date(when), 'HH:mm'));
  return (
    <S.Container done={done}>
      <S.TopCard>
          <img src={typeIcons[type]} alt="Icone"/>
          <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
          <strong>{data}</strong>
          <span>{hour}</span>
      </S.BottomCard>
    </S.Container>

  )
}

export default TaskCard;