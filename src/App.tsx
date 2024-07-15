import React, {useState, useCallback, useEffect} from 'react';
import { Upload, Button, Layout, Card, Typography } from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';
import { useDropzone } from 'react-dropzone';

import ThemeContext, { Theme } from './contexts/ThemeContext';
import useFetch from 'react-fetch-hook';
import TicketContent from './components/TicketContent';
import type { Ticket } from './types/ticket';

interface UploadAreaProps {
    onFileLoaded: (srcUrl: string) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onFileLoaded }) => {
    return (
            <Card
                style={{ width: 'auto', maxWidth: 600, padding: '20px', margin: '20px' }}
                title="上传或拖拽 JSON 文件"
                className="flex-1 text-center"
            >
                <Typography.Text type="secondary">
                    拖拽 JSON 文件到这里或点击下方按钮上传
                </Typography.Text>
                <Upload onChange={({ currentFile }) => onFileLoaded(currentFile.url || '')}>
                    <Button icon={<IconUpload />} theme="light" style={{ marginTop: 20 }}>
                        点击上传
                    </Button>
                </Upload>
            </Card>
    );
};


const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [srcUrl, setSrcUrl] = useState<string>('');

    const { isLoading, data: ticket, error } = useFetch<Ticket>(srcUrl, { depends: [srcUrl] });

    useEffect(() => {
        updateThemeInternal(theme);
    }, [theme]); // 依赖于 theme，每当 theme 更改时执行

    function updateTheme(theme: Theme) {
        setTheme(theme);
        updateThemeInternal(theme);
    }

    function updateThemeInternal(theme: Theme) {
        const body = document.body;
        body.setAttribute('theme-mode', theme);
    }
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            setSrcUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps } = useDropzone({ onDrop, noClick: true, noKeyboard: true });
    return (
        <ThemeContext.Provider value={theme}>
            <div {...getRootProps()} className="h-screen overflow-hidden">
                <Layout className="bg-semi-color-bg-0 text-semi-color-text-0 h-screen overflow-hidden">
                    <Layout.Content>
                        {!srcUrl ? (
                            <div className="w-full h-full flex justify-center items-center">
                                <UploadArea onFileLoaded={setSrcUrl}/>
                            </div>
                        ) : isLoading || error || !ticket ? (
                            <Typography.Text
                                style={{textAlign: 'center'}}>加载中或出错，请检查文件是否正确</Typography.Text>
                        ) : (
                            <TicketContent ticket={ticket} updateTheme={updateTheme}/>
                        )}
                    </Layout.Content>
                </Layout>
            </div>
        </ThemeContext.Provider>
);
};

export default App;
