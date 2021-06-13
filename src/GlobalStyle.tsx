import React from 'react';
// createGlobalStyle нужен для создания глобальных стилей
import { createGlobalStyle } from 'styled-components';
// получаем тему персонажа
import {lightSber} from '@sberdevices/plasma-tokens/themes';
// получаем цвета для нашего интерфейса
import { text, background, gradient } from '@sberdevices/plasma-tokens';

const DocStyles = createGlobalStyle`
  html {
    color: ${text};
    background-color: ${background};
    background-image: ${gradient};

    /** необходимо залить градиентом всю подложку */
    min-height: 100vh;
  }
`;

// создаем react-компонент для персонажа
const Theme = createGlobalStyle(lightSber);

const GlobalStyle = () => {
    return (
        <div>
            {/* Используем глобальные react-компоненты один раз */}
            <DocStyles />
            <Theme />
        </div>
    );
};

export default GlobalStyle;
