import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {initTide49} from 'src/store/devicesThunks';
import {getSelectedDefinition} from 'src/store/definitionsSlice';
import {updateSelectedKey} from 'src/store/keymapSlice';

interface HomeProps {
  children?: React.ReactNode;
  hasHIDSupport: boolean;
}

export const Home: React.FC<HomeProps> = (props) => {
  const dispatch = useAppDispatch();
  const selectedDefinition = useAppSelector(getSelectedDefinition);

  // Tide49: 应用启动时直接初始化 Tide49 配置，跳过 USB 搜索
  useEffect(() => {
    dispatch(initTide49());
  }, []);

  useEffect(() => {
    if (selectedDefinition) {
      dispatch(updateSelectedKey(null));
    }
  }, [selectedDefinition]);

  return <>{props.children}</>;
};
