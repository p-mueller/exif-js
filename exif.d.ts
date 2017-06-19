declare module 'exif-js' {
	interface EXIFStatic {
		getData(img: any, callback: any): any;
		getTag(img: any, tag: any): any;
		getAllTags(img: any): any;
		pretty(img: any): string;
		readFromBinaryFile(file: any): any;
	}

	var EXIF : EXIFStatic;
	export = EXIF;
}
