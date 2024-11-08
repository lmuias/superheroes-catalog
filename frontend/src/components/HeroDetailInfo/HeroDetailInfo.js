import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useParams } from 'react-router-dom';
import style from './HeroDetailInfo.module.scss';
import { useState } from 'react';
import { EditingForm } from '../EditingForm';
import { useAppContext } from '../../AppContet';
import { deleteImage, uploadImage, uploadMainImage } from '../../api/imagesApi';
export const HeroDetailInfo = () => {
    const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
    const { hero_name } = useParams();
    const { heroes } = useAppContext();
    const hero = heroes && heroes.find(hero => hero.real_name === hero_name);
    const { nickname, images, real_name, catch_phrase, superpowers, origin_description, main_image, id } = hero || {};
    const imagesUrl = images && Array.isArray(images)
        ? images.map(someImg => import.meta.env.VITE_SERVER_URL + `${someImg.replace(/{|}/g, '')}`)
        : null;
    const imageUrl = main_image ? import.meta.env.VITE_SERVER_URL + `${main_image.replace(/{|}/g, '')}` : null;
    const handleFileChange = async (event) => {
        const fileInput = event.target;
        const file = fileInput.files ? fileInput.files[0] : null;
        if (file && id) {
            try {
                const imageUrl = await uploadImage(id, file);
                console.log('Uploaded image URL:', imageUrl);
            }
            catch (error) {
                console.error('Upload failed:', error);
            }
            finally {
                window.location.reload();
            }
        }
    };
    const handleMainFileChange = async (event) => {
        const fileInput = event.target;
        const file = fileInput.files ? fileInput.files[0] : null;
        if (file && id) {
            try {
                const imageUrl = await uploadMainImage(id, file);
                console.log('Uploaded image URL:', imageUrl);
            }
            catch (error) {
                console.error('Upload failed:', error);
            }
            finally {
                window.location.reload();
            }
        }
    };
    function getFilePath(url) {
        const regex = /(?:http:\/\/localhost:\d+)(\/uploads\/images\/.*)$/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
    const handleDeleteImage = async (imageUrl) => {
        const slicedUrl = getFilePath(imageUrl);
        if (id && slicedUrl) {
            try {
                await deleteImage(id, slicedUrl);
                console.log('Deleted image:', imageUrl);
            }
            catch (error) {
                console.error('Failed to delete image:', error);
            }
            finally {
                window.location.reload();
            }
        }
        console.log(slicedUrl);
    };
    return (_jsxs("div", { className: style.section, children: [_jsxs("div", { className: style.navigation, children: [_jsx(Link, { to: '/', className: style.button, children: "Prev page" }), _jsx("button", { type: 'button', className: style.button, onClick: () => setIsEditWindowOpen(true), children: "Edit hero information" })] }), _jsx("h2", { className: style.title, children: nickname }), _jsx("div", { className: style.content, children: _jsxs("div", { className: style.block, children: [_jsxs("div", { className: style.gallery, children: [imageUrl ? (_jsxs("div", { className: `${style['image-wrapper']} ${style['image-wrapper--wide']}`, children: [_jsx("div", { className: style.circles, children: _jsx("label", { htmlFor: "fileInputMain", children: _jsxs("div", { className: style.circle, children: [" Change image", _jsx("input", { type: "file", id: "fileInputMain", name: "image", accept: "image/*", onChange: handleMainFileChange, required: true, style: { display: 'none' } })] }) }) }), _jsx("img", { className: style.image, src: imageUrl, alt: 'heroImage' })] })) : (_jsxs("div", { className: `${style['image-wrapper']} ${style['image-wrapper--wide']}`, children: [_jsx("label", { htmlFor: "fileInputMain", children: _jsx("svg", { className: style.add, children: _jsx("use", { href: '/sprite.svg#icon-folder-plus' }) }) }), _jsx("input", { type: "file", id: "fileInputMain", name: "image", accept: "image/*", onChange: handleMainFileChange, required: true, style: { display: 'none' } })] })), imagesUrl && imagesUrl.length > 0 ? (imagesUrl.map((someImg, index) => (_jsxs("div", { className: style['image-wrapper'], children: [_jsx("div", { className: style.circles, children: _jsx("div", { className: `${style.circle} ${style['circle--red']}`, onClick: () => handleDeleteImage(someImg), children: " Delete image" }) }), _jsx("img", { className: style.image, src: someImg, alt: 'heroImage' })] }, index)))) : (Array(5).fill(null).map((_, index) => (_jsxs("div", { className: `${style['image-wrapper']} ${style['image-wrapper--add']}`, children: [_jsx("label", { htmlFor: "fileInput", children: _jsx("svg", { className: style.add, style: { cursor: 'pointer' }, children: _jsx("use", { href: '/sprite.svg#icon-folder-plus' }) }) }), _jsx("input", { type: "file", id: "fileInput", name: "image", accept: "image/*", onChange: handleFileChange, required: true, style: { display: 'none' } })] }, index)))), imagesUrl && imagesUrl.length < 5 && imagesUrl.length !== 0 && (Array(5 - imagesUrl.length).fill(null).map((_, index) => (_jsxs("div", { className: `${style['image-wrapper']} ${style['image-wrapper--add']}`, children: [_jsx("label", { htmlFor: "fileInput", children: _jsx("svg", { className: style.add, style: { cursor: 'pointer' }, children: _jsx("use", { href: '/sprite.svg#icon-folder-plus' }) }) }), _jsx("input", { type: "file", id: "fileInput", name: "image", accept: "image/*", onChange: handleFileChange, required: true, style: { display: 'none' } })] }, index + imagesUrl.length))))] }), _jsxs("div", { className: style.info, children: [_jsxs("p", { className: style.text, children: [_jsx("span", { className: style['text--bold'], children: "Real name:" }), " ", real_name?.split('_').join(' ')] }), _jsxs("p", { className: style.text, children: [_jsx("span", { className: style['text--bold'], children: "Superpowers:" }), " ", superpowers] }), _jsxs("p", { className: style.text, children: [_jsx("span", { className: style['text--bold'], children: "Catch phrase:" }), " ", catch_phrase] }), _jsxs("p", { className: style.text, children: [_jsx("span", { className: style['text--bold'], children: "Description:" }), " ", origin_description] })] })] }) }), hero &&
                _jsx(EditingForm, { isEditWindowOpen: isEditWindowOpen, currentHero: hero, setIsEditWindowOpen: setIsEditWindowOpen })] }));
};
