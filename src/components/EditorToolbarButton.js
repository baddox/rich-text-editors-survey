import styled from 'styled-components';
import Button from './Button';

const EditorToolbarButton = styled(Button)`
  background-color: ${({ active }) => (active ? '#ddd' : '#eee')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  margin-right: 5px;
  cursor: pointer;
`;

export default EditorToolbarButton;
