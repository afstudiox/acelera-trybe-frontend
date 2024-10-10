import React from 'react';
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Login from '../src/pages/Login'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

describe('Teste da Tela de Login', () => {

    test('Renderiza a tela de Login corretamente', () => {
        // Arrange - Preparação
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        // Act - Execução
        const welcomeText = screen.getByText(/welcome/i);
        // Assert - Verificação
        expect(welcomeText).toBeInTheDocument();
    })
}); 