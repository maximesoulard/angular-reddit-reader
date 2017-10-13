declare module Reddit {
    export interface Post {
        data: Data;
    }
    
    interface Data {
        preview: Preview;
        previewUrl: string;
    }
    
    interface Preview {
        images: Image[];
    }
    
    interface Image {
        resolutions: Resolution[];
        source: Source;
    }
    
    interface Source {
        url: string;
    }
    
    interface Resolution {
        url: string;
    }
}