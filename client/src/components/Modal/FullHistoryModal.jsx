import styled from "styled-components";

const ModalContainer = styled.div`
    display: none;
    justify-content: center;

    position: absolute;
    top: 0;

    width: 100%;
    height: 100vh;

    background-color: rgba(124, 124, 124, 0.6);

    z-index: 2;
`;

const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 400px;
    height: 150px;

    margin-top: 8%;

    border: 1px solid var(--color-red-tone);
    border-radius: 4px;

    background-color: var(--color-primary);
`;

export const FullHistoryModal = () => {
    return(
        <ModalContainer>
            <ModalContent>Your application history is full.</ModalContent>
        </ModalContainer>
    );
}
