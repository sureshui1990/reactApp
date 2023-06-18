
export const setUserProfile = profile => {
    Object.keys(profile).forEach(key => {
        localStorage.setItem(key, typeof profile[key] === 'object' ? JSON.stringify(profile[key]) : profile[key]);
    });
}