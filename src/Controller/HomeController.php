<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    /** Дэмжигдэх хэлүүд — хэл солих товч энэ жагсаалтаас үүснэ. */
    public const LOCALES = ['mn', 'en'];

    #[Route(
        '/{_locale}',
        name: 'app_home',
        requirements: ['_locale' => 'mn|en'],
        defaults: ['_locale' => 'mn'],
    )]
    public function index(): Response
    {
        // Бүх бичвэр translations/messages.<locale>.yaml дотор байдаг тул
        // энд зөвхөн давталтын түлхүүрүүдийг дамжуулна.
        return $this->render('home/index.html.twig', [
            'services' => range(1, 8),
            'milestones' => range(1, 5),
            'erpClients' => range(1, 3),
        ]);
    }
}
