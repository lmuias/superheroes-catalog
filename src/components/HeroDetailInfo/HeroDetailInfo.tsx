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
  ? images.map(someImg => `http://localhost:8080${someImg.replace(/{|}/g, '')}`)
  : null;

  const imageUrl = main_image ? `http://localhost:8080${main_image.replace(/{|}/g, '')}` : null;


  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (file && id) {
      try {
        const imageUrl = await uploadImage(id, file);
        console.log('Uploaded image URL:', imageUrl);
      } catch (error) {
        console.error('Upload failed:', error);
      } finally {
        window.location.reload();
      }
    }
  };

  const handleMainFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (file && id) {
      try {
        const imageUrl = await uploadMainImage(id, file);
        console.log('Uploaded image URL:', imageUrl);
      } catch (error) {
        console.error('Upload failed:', error);
      } finally {
        window.location.reload();
      }
    }
  };

  function getFilePath(url: string) {
    const regex = /(?:http:\/\/localhost:\d+)(\/uploads\/images\/.*)$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const handleDeleteImage = async (imageUrl: string) => {
    const slicedUrl = getFilePath(imageUrl);

    if (id && slicedUrl) {

      try {
        await deleteImage(id, slicedUrl);
        console.log('Deleted image:', imageUrl);
      } catch (error) {
        console.error('Failed to delete image:', error);
      } finally {
        window.location.reload();
      }
    }

    console.log(slicedUrl)
  };

  return (
    <div className={style.section}>
      <div className={style.navigation}>
        <Link to={'/'} className={style.button}>Prev page</Link>
        <button 
          type='button' 
          className={style.button}
          onClick={() => setIsEditWindowOpen(true)}
        >
          Edit hero information
        </button>
      </div>
      <h2 className={style.title}>{nickname}</h2>
      <div className={style.content}>
        <div className={style.block}>
          <div className={style.gallery}>
            {imageUrl ? (
              <div className={`${style['image-wrapper']} ${style['image-wrapper--wide']}`}>
                <div className={style.circles}>
                <label htmlFor="fileInputMain">
                  <div className={style.circle}> Change image
                      <input 
                      type="file" 
                      id="fileInputMain" 
                      name="image" 
                      accept="image/*" 
                      onChange={handleMainFileChange}
                      required 
                      style={{ display: 'none' }}
                    />
                  </div>
                </label>
                </div>
                <img className={style.image} src={imageUrl} alt='heroImage' />
              </div>
            ) : (
              <div className={`${style['image-wrapper']} ${style['image-wrapper--wide']}`}>
                <label htmlFor="fileInputMain">
                  <svg className={style.add}>
                    <use href='/sprite.svg#icon-folder-plus'></use>
                  </svg>
                </label>
                <input 
                  type="file" 
                  id="fileInputMain" 
                  name="image" 
                  accept="image/*" 
                  onChange={handleMainFileChange}
                  required 
                  style={{ display: 'none' }}
                />
            </div>
            )}
            {imagesUrl && imagesUrl.length > 0 ? (
              imagesUrl.map((someImg, index) => (
                <div className={style['image-wrapper']} key={index}>
                  <div className={style.circles}>
                    <div className={`${style.circle} ${style['circle--red']}`} onClick={() => handleDeleteImage(someImg)}> Delete image</div>
                  </div>
                  <img className={style.image} src={someImg} alt='heroImage' />
                </div>
              ))
            ) : (
              Array(5).fill(null).map((_, index) => (
                <div className={`${style['image-wrapper']} ${style['image-wrapper--add']}`} key={index}>
                  <label htmlFor="fileInput">
                    <svg className={style.add} style={{ cursor: 'pointer' }}>
                      <use href='/sprite.svg#icon-folder-plus'></use>
                    </svg>
                  </label>
                  <input 
                    type="file" 
                    id="fileInput" 
                    name="image" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    required 
                    style={{ display: 'none' }}
                  />
                </div>
              ))
            )}
            {imagesUrl && imagesUrl.length < 5 && imagesUrl.length !== 0 && (
              Array(5 - imagesUrl.length).fill(null).map((_, index) => (
                <div className={`${style['image-wrapper']} ${style['image-wrapper--add']}`} key={index + imagesUrl.length}>
                  <label htmlFor="fileInput">
                    <svg className={style.add} style={{ cursor: 'pointer' }}>
                      <use href='/sprite.svg#icon-folder-plus'></use>
                    </svg>
                  </label>
                  <input 
                    type="file" 
                    id="fileInput" 
                    name="image" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    required 
                    style={{ display: 'none' }}
                  />
                </div>
              ))
            )}
          </div>
          <div className={style.info}>
            <p className={style.text}><span className={style['text--bold']}>Real name:</span> {real_name?.split('_').join(' ')}</p>
            <p className={style.text}><span className={style['text--bold']}>Superpowers:</span> {superpowers}</p>
            <p className={style.text}><span className={style['text--bold']}>Catch phrase:</span> {catch_phrase}</p>
            <p className={style.text}><span className={style['text--bold']}>Description:</span> {origin_description}</p>
          </div>
        </div>
      </div>

      {hero && 
        <EditingForm 
          isEditWindowOpen={isEditWindowOpen} 
          currentHero={hero} 
          setIsEditWindowOpen={setIsEditWindowOpen}
        />
      }
    </div>
  );
};