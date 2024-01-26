import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase';

const useIconLinks = () => {
  const [iconLinks, setIconLinks] = useState([]);

  useEffect(() => {
    const fetchIconLinks = async () => {
      try {
        const iconLinksCollection = collection(firestore, "Links");
        const iconLinksSnapshot = await getDocs(iconLinksCollection);
        const fetchedIconLinks = iconLinksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setIconLinks(fetchedIconLinks);
      } catch (err) {
        console.error("Error fetching icon links:", err);
      }
    };

    fetchIconLinks();
  }, []);

  return iconLinks;
};

export default useIconLinks;
