export default function getCvFileName(name, extension) {
	return `${name.replace(/\s+/g, "_")}_CV.${extension}`;
}
