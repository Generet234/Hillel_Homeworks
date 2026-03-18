import {useEffect, useRef} from 'react'
import Editor from '@toast-ui/editor'

function MarkdownEditor({onContentChange}) {
    const ref = useRef(null)
    useEffect(() => {
        const editor = new Editor({
            el: ref.current,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            onContentChange
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            console.log(content);
        });
        return () => editor.destroy()

    }, [])
    return (
        <div className='editor'>
            <div ref={ref} />
        </div>
    )
}

export default MarkdownEditor