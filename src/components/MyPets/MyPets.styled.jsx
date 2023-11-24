import styled from 'styled-components';



export const ContainerItem = styled.div`
    background-color: #ffffff;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    padding: 20px;
    border-radius: 40px;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        gap: 20px;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 768px) {
        width: 821px;

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    object-fit: cover;

    @media screen and (max-width: 767px) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        width: 128px;
        height: 128px;
    }

    @media screen and (min-width: 1280px) {
        width: 161px;
        height: 161px;
        border-radius: 40px;
    }
`;

export const InfoContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;
`;

export const Text = styled.p`
    color: #000;
    font-family: Manrope;
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: 0.56px;

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    @media screen and (min-width: 768px) {
        line-height: 1.28;

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;
        line-height: 1.37;
        letter-spacing: 0.64px;

        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
`;

export const DeleteIcon = styled.button`
    display: block;
    position: absolute;
    right: 7%;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        top: 8%;
        right: 2%;
    }

    &:hover {
        background: #FFC107;
    }

`;

